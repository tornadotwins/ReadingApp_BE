import { FilePicker, Input, Text } from "../Base";
import BlockHeader from "./BlockHeader";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer
} from "./styles";
import { ImageBlockPropsType } from "./types";

function ImageBlock(props: ImageBlockPropsType) {
  return (
    <StyledContainer>
      <BlockHeader
        title='Image Block'
        onDelete={props.onDelete}
      />

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Image URL:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input value="hello" onChange={() => {}} disable/>

          <FilePicker
            type=".png, .jpg, .jpeg, .svg, .gif, .webp, .bmp, .tiff, .ico"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  props.onImageInputChange(e.target?.result as string);
                }
                reader.readAsDataURL(file);
              }
            }}
          />
        </StyledInputContainer>
      </StyledContentRow>

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Alt Text:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Alt Text"
            value={props.alt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onAltInputChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>
    </StyledContainer>
  );
}

export default ImageBlock;
