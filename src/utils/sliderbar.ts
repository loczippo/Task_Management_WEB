import { ToggleSliderBarEnum } from "../enums";
import { LabelSliderBarEnum, PrimarySliderBarEnum } from "../enums/sliderbar.enum";

export const getToggle = (): boolean => {
    return localStorage.getItem(ToggleSliderBarEnum.KEY) == ToggleSliderBarEnum.VALUE ? true : false;
}
export const setToggle = (value: string): void => {
    localStorage.setItem(ToggleSliderBarEnum.KEY, value);
}
export const getSliderBarMenu = (): PrimarySliderBarEnum => {
    const item = localStorage.getItem(LabelSliderBarEnum.KEY);
    return item == null ? PrimarySliderBarEnum.DEFAULT : item as PrimarySliderBarEnum;
}
export const setSliderBarMenu = (value: PrimarySliderBarEnum): void => {
    localStorage.setItem(LabelSliderBarEnum.KEY, value);
}