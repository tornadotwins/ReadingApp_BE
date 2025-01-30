type PreviewJourneyCardType = {
  title: string;
  seriesTitle: string;
  logo: string;
}

type JourneyPreviewPropsType = {
  markImg: string;
  markTitle: string;
  journeyItems: PreviewJourneyCardType[];
  language: string;
}

export type {
  PreviewJourneyCardType,
  JourneyPreviewPropsType,
}