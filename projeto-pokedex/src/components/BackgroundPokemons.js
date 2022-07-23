import { CardPokemon } from "./StyledListPokemons";
export const defineBackgroundColor = (type) => {
  if (type === "grass") {
    return "#AD61AE";
  } else if (type === "fire") {
    return "#F44900";
  } else if (type === "water") {
    return "#33A4F5";
  } else if (type === "bug") {
    return "#316520";
  } else if (type === "flying") {
    return "#BF9762";
  } else if (type === "poison") {
    return "#70B873";
  } else if (type === "normal") {
    return "#8A8A8A";
  } else if (type === "electric") {
    return "#a68d1f";
  }else if (type === "ground") {
    return "#993d0f";
  }
};
export const defineBackgroundColorCard = (type) => {
  if (type === "grass") {
    return "#729F92";
  } else if (type === "fire") {
    return "#EAAB7D";
  } else if (type === "water") {
    return "#71C3FF";
  } else if (type === "bug") {
    return "#76A866";
  } else if (type === "normal") {
    return "#BF9762";
  } else if (type === "electric") {
    return "#F4D23B";
  } else if (type === "ground") {
    return "#D97745";
  } else if (type === "poison") {
    return "#AD61AE";
  }
};
