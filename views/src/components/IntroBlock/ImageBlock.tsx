import { useState } from "react";
import { FilePicker, Input, Text } from "../Base";
import BlockHeader from "./BlockHeader";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer,
  StyledImagePreview, // Add a styled component for the image preview
} from "./styles";
import { ImageBlockPropsType } from "./types";

function ImageBlock(props: ImageBlockPropsType) {
  // Local state to store the image URL
  const [imageUrl, setImageUrl] = useState(props.image || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageUrl(URL.createObjectURL(file)); // Update the local state
        props.onImageInputChange(result); // Pass the URL to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledContainer>
      <BlockHeader
        title="Image Block"
        blockIndex={props.blockIndex}

        onDelete={props.onDelete}
        onMoveUp={props.onMoveUp}
        onMoveDown={props.onMoveDown}
      />

      <StyledContentRow>
        <StyledLabel>
          <Text
            color="#155D74"
            fontFamily="Inter"
            fontSize={16}
            lineHeight={24}
            fontWeight="500"
          >
            Image URL:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            value={imageUrl} // Display the image URL
            placeholder="Image URL"
            disable

            onChange={() => { }}
          />

          <FilePicker
            type=".png, .jpg, .jpeg, .svg, .gif, .webp, .bmp, .tiff, .ico"
            onChange={handleFileChange}
          />
        </StyledInputContainer>
      </StyledContentRow>

      <StyledContentRow>
        <StyledLabel>
          <Text
            color="#155D74"
            fontFamily="Inter"
            fontSize={16}
            lineHeight={24}
            fontWeight="500"
          >
            Alt Text:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Alt Text"
            value={props.alt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.onAltInputChange(e.target.value)
            }
          />
        </StyledInputContainer>
      </StyledContentRow>

      {imageUrl && (
        <StyledContentRow>
          <StyledLabel>
            <Text
              color="#155D74"
              fontFamily="Inter"
              fontSize={16}
              lineHeight={24}
              fontWeight="500"
            >
              Preview:
            </Text>
          </StyledLabel>

          <StyledImagePreview>
            <img src={imageUrl} alt={props.alt || "Selected image"} />
          </StyledImagePreview>
        </StyledContentRow>
      )}
    </StyledContainer>
  );
}

export default ImageBlock;
