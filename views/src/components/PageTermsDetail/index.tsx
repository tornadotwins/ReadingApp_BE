import Images from "@/config/images";
import { Input, Text } from "../Base";
import {
  StyledDetailContainer,
  StyledDetailItemContainer,
  StyledDefaultTermContainer,
  StyledCurrentTermContainer,
  StyledPreviewImg,
  StyledTermContainer,
} from "./styles";
import { PageTermsDetailPropsType } from "./types";
import { AppTextType } from "@/pages/types";

function PageTermsDetail(props: PageTermsDetailPropsType) {
  return (
    <StyledDetailContainer>
      {
        props.terms.map((term: AppTextType, index: number) => (
          <StyledDetailItemContainer key={index}>
            <StyledTermContainer>
              <Text fontFamily="'Baloo Da 2'" fontWeight="400" fontSize={16} lineHeight={24} color="#A1A1A1">
                {term.variable}
              </Text>

              <StyledDefaultTermContainer>
                <StyledPreviewImg
                  src={Images.icon_preview}
                />

                <Text fontFamily="'Baloo Da 2'" fontWeight="400" fontSize={16} lineHeight={24} color="#155D74">
                  {term.text?.[props.defaultLanguage]}
                </Text>
              </StyledDefaultTermContainer>
            </StyledTermContainer>

            <StyledCurrentTermContainer>
              <Input
                value={term.text?.[props.currentLanguage]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onInputChange(term._id, e.target.value)}
              />
            </StyledCurrentTermContainer>
          </StyledDetailItemContainer>
        ))
      }

      <Text color="#A1A1A1" textAlign="center" fontFamily="'Baloo Da 2'">
        Of course this list goes on as long as it is but it’s short here for the design
      </Text>
    </StyledDetailContainer>
  )
}

export default PageTermsDetail;