import { useEffect, useState, } from 'react';

import { Button } from "../Base";
import BlockHeader from "./BlockHeader";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import {
  StyledContainer,
  // StyledSubTitleContainer,
  StyledCollapsibleButtonContainer,
  StyledCollapsibleButtonGroup,
  StyledCollapsibleAddButtonContainer,
  StyledCollapsibleBlockGroup,
} from "./styles";

import { CollapsibleBlockPropsType } from "./types";
import { BlockType, ImageValType } from '@/pages/IntroOverview/types';
import { getLanguageCodeFromLanguage } from '@/utils';
import TitleBlock from './TitleBlock';

function CollapsibleBlock(props: CollapsibleBlockPropsType) {
  const languageCode = getLanguageCodeFromLanguage(props.language);
  const [blocks, setBlocks] = useState<BlockType[]>([]);

  useEffect(() => {
    const blocks: BlockType[] = [];
    const valueContents = props.value?.content;
    if (props.value?.title) {
      const block: BlockType = {
        id: `title-${Date.now()}-${Math.random()}`,
        blockIndex: 1,
        type: 'title',
        value: props.value?.title?.[languageCode]
      };

      blocks.push(block);
    }

    valueContents?.map((content, index) => {
      if (content.url) {
        const block: BlockType = {
          id: `image-${Date.now()}-${Math.random()}`,
          blockIndex: index + 2,
          type: 'image',
          value: {
            url: content.url,
            alt: content.alt
          }
        };

        blocks.push(block);
      } else if (content.isTitle) {
        const block: BlockType = {
          id: `title-${Date.now()}-${Math.random()}`,
          blockIndex: index + 2,
          type: 'title',
          value: content?.[languageCode] as string
        };

        blocks.push(block);
      } else {
        const block: BlockType = {
          id: `text-${Date.now()}-${Math.random()}`,
          blockIndex: index + 2,
          type: 'text',
          value: content?.[languageCode] as string
        };

        blocks.push(block);
      }
    });

    setBlocks(blocks);
  }, []);

  useEffect(() => {
    props.onChange(blocks)
  }, [blocks]);

  const _renderHeader = () => {
    return (
      <BlockHeader
        title='Collapsible Block'
        blockIndex={props.blockIndex}

        onDelete={props.onDelete}
        onMoveUp={props.onMoveUp}
        onMoveDown={props.onMoveDown}
      />
    )
  }

  // const _renderSubTitle = (title: string) => {
  //   return (
  //     <StyledSubTitleContainer>
  //       <Text
  //         color='#155D74'
  //         fontFamily='Inter'
  //         fontSize={16}
  //         lineHeight={24}
  //         fontWeight='bold'
  //       >
  //         {title}
  //       </Text>
  //     </StyledSubTitleContainer>
  //   )
  // }

  // Add Block
  const handleAddBlock = (type: 'title' | 'text' | 'image') => {
    const id = `${type}-${Date.now()}-${Math.random()}`;
    const newBlock: BlockType = {
      id,
      blockIndex: blocks.length + 1,
      type: type,
      value: type == 'image' ? { url: '', alt: '' } : ''
    };

    setBlocks([...blocks, newBlock]);
  }

  // Delete a block
  const handleDeleteBlock = (id: string) => {
    const newBlocks = blocks.filter(block => block.id !== id);
    setBlocks(newBlocks);
  }

  const _renderButtonGroup = () => {
    return (
      <StyledCollapsibleButtonGroup>
        <StyledCollapsibleAddButtonContainer>
          <StyledCollapsibleButtonContainer>
            <Button
              label="Add Title"
              onClick={() => handleAddBlock('title')}
            />
          </StyledCollapsibleButtonContainer>

          <StyledCollapsibleButtonContainer isdisabled={blocks.length == 0 ? 'true' : 'false'}>
            <Button
              label="Add Text"
              disabled={!blocks || blocks.length == 0}

              onClick={() => handleAddBlock('text')}
            />
          </StyledCollapsibleButtonContainer>

          <StyledCollapsibleButtonContainer isdisabled={blocks.length == 0 ? 'true' : 'false'}>
            <Button
              label="Add Image"
              disabled={!blocks || blocks.length == 0}

              onClick={() => handleAddBlock('image')}
            />
          </StyledCollapsibleButtonContainer>
        </StyledCollapsibleAddButtonContainer>
      </StyledCollapsibleButtonGroup>
    )
  }

  const handleInputChange = (id: string, value: string) => {
    setBlocks(blocks.map(block => block.id == id ? { ...block, value } : block));
  }

  const handleUpdateImageBlock = (id: string, newData: object) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ?
          {
            ...block,
            value: { ...(block.value as ImageValType), ...newData }
          } :
          block
      )
    );
  };

  const handleReorderBlocks = (index: number, direction: 'up' | 'down') => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      if (direction === "up" && index > 0) {
        [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      }
      if (direction === "down" && index < newBlocks.length - 1) {
        [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      }
      return newBlocks;
    });
  }

  const _renderBlocks = () => {
    return (
      <StyledCollapsibleBlockGroup>
        {blocks.map((block, index) => {
          switch (block.type) {
            case 'title':
              return (
                <TitleBlock
                  key={index}
                  language={props.language}
                  inputVal={block.value as string}
                  blockIndex={index + 1}
                  disableDelete={index === 0}
                  disableMovedown={index === 0}
                  disableMoveUp={index === 0}

                  onInputChange={(val) => handleInputChange(block.id, val)}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );
            case 'text':
              return (
                <TextBlock
                  key={index}
                  language={props.language}
                  inputVal={block.value as string}
                  blockIndex={index + 1}
                  disableMoveUp={index === 1}

                  onInputChange={(val) => handleInputChange(block.id, val)}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );
            case 'image':
              return (
                <ImageBlock
                  key={index}
                  url={((block.value) as ImageValType).url}
                  alt={((block.value) as ImageValType).alt}
                  blockIndex={index + 1}
                  disableMoveUp={index == 1}

                  onImageInputChange={(val) => handleUpdateImageBlock(block.id, { url: val })}
                  onAltInputChange={(val) => handleUpdateImageBlock(block.id, { alt: val })}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );
          }
          return null;
        })}
      </StyledCollapsibleBlockGroup>
    )
  }

  return (
    <StyledContainer>
      {_renderHeader()}

      {_renderButtonGroup()}

      {_renderBlocks()}
    </StyledContainer>
  );
}

export default CollapsibleBlock;
