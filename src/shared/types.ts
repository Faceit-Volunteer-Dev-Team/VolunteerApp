export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurResources = "ourresurces",
  ApplyNow = "applynow",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
