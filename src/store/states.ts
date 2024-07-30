import { reactive } from "vue";

export default reactive({
  editModal: false,
  loadingRoute: false,
  cardModal: {
    card: "Peashooter",
    show: false,
  },
  heroModel: {
    hero: "Green Shadow",
    show: false,
  },
  deckFilter: {
    show: false,
    hideCards: false,
    textQuery:"",
    cardsMatchingFilter: [] as string[],
  },
});
