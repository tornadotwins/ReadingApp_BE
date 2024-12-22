import { useEffect, useState, } from 'react';

import { Button, Input, Text } from "../Base";
import BlockHeader from "./BlockHeader";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer,
  StyledSubTitleContainer,
  StyledCollapsibleButtonContainer,
  StyledCollapsibleButtonGroup,
  StyledCollapsibleAddButtonContainer,
  StyledCollapsibleBlockGroup,
} from "./styles";

import { CollapsibleBlockPropsType } from "./types";
import { BlockType, ImageValType } from '@/pages/IntroOverview/types';

function CollapsibleBlock(props: CollapsibleBlockPropsType) {
  const [blocks, setBlocks] = useState<BlockType[]>([
    { id: `title-${Date.now()}`, blockIndex: 1, type: 'title', value: '' },
  ]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    props.onChange(blocks)
    // console.log(blocks)
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

  const _renderSubTitle = (title: string) => {
    return (
      <StyledSubTitleContainer>
        <Text
          color='#155D74'
          fontFamily='Inter'
          fontSize={16}
          lineHeight={24}
          fontWeight='bold'
        >
          {title}
        </Text>
      </StyledSubTitleContainer>
    )
  }

  // Add Block
  const handleAddBlock = (type: 'text' | 'image') => {
    const id = `${type}-${Date.now()}`;
    const newBlock: BlockType = {
      id,
      blockIndex: blocks.length + 1,
      type: type,
      value: type == 'image' ? { image: '', alt: '' } : ''
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
              label="Add Text"
              onClick={() => handleAddBlock('text')}
            />
          </StyledCollapsibleButtonContainer>

          <StyledCollapsibleButtonContainer>
            <Button
              label="Add Image"
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
          if (block.type === "text") {
            return (
              <TextBlock
                key={block.id}
                language={props.language}
                inputVal={block.value as string}
                blockIndex={index}

                onInputChange={(val) => handleInputChange(block.id, val)}
                onDelete={() => handleDeleteBlock(block.id)}
                onMoveUp={() => handleReorderBlocks(index, "up")}
                onMoveDown={() => handleReorderBlocks(index, "down")}
              />
            );
          }
          if (block.type === "image") {
            return (
              <ImageBlock
                key={block.id}
                image={((block.value) as ImageValType).image}
                alt={((block.value) as ImageValType).alt}
                blockIndex={index}

                onImageInputChange={(val) => handleUpdateImageBlock(block.id, { image: val })}
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

  const handleTitleChange = (title: string) => {
    setTitle(title);
    setBlocks(blocks.map(block => block.type == 'title' ? { ...block, value: title } : block));
  }

  return (
    <StyledContainer>
      {_renderHeader()}

      {_renderSubTitle('Title: ')}

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            {props.language}
          </Text>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Title:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Title"
            value={title}

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTitleChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>

      {_renderSubTitle('Content Items: ')}

      {_renderButtonGroup()}

      {_renderBlocks()}
    </StyledContainer>
  );
}

export default CollapsibleBlock;
