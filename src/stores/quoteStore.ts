// quoteStore.ts
import { defineStore } from 'pinia';

// Define the Quote interface for type safety
interface Quote {
  id: number;
  text: string;
  author: string;
}

const initialQuotes: Quote[] = [
  { id: 1, text: "We suffer more often in imagination than in reality", author: "Seneca" },
  { id: 2, text: "It's not that we have a short time to live, but that we waste much of it", author: "Seneca" },
  { id: 3, text: "He who is brave is free", author: "Seneca" },
  { id: 4, text: "We have two ears and one mouth so that we can listen twice as much as we speak", author: "Epictetus" },
  { id: 5, text: "The best revenge is to be unlike him who performed the injustice", author: "Marcus Aurelius" },
  { id: 6, text: "We are more often frightened than hurt, and we suffer more from imagination than from reality", author: "Seneca" },
  { id: 7, text: "It is not death that a man should fear, but he should fear never beginning to live", author: "Marcus Aurelius" },
  { id: 8, text: "We suffer not from the events in our lives, but from our judgments about them", author: "Epictetus" },
  { id: 9, text: "The key is to keep company only with people who uplift you, whose presence calls forth your best", author: "Epictetus" },
  { id: 10, text: "The best way to avenge yourself is to not be like that", author: "Marcus Aurelius" },
  { id: 11, text: "We should not, like sheep, follow the herd of creatures in front of us, making our way where others go, not where we ought to go", author: "Seneca" },
  { id: 12, text: "The soul becomes dyed with the color of its thoughts", author: "Marcus Aurelius" },
  { id: 13, text: "It is not that we have so little time but that we lose so much", author: "Seneca" },
  { id: 14, text: "We have within us the power to choose our responses to external events", author: "Epictetus" },
  { id: 15, text: "No person has the power to have everything they want, but it is in their power not to want what they don't have, and to cheerfully put to good use what they do have", author: "Seneca" },
  { id: 16, text: "True happiness is... to enjoy the present, without anxious dependence upon the future", author: "Seneca" },
];

// Define the Pinia store
export const createQuoteStore = defineStore({
  id: 'quote',
  state: () => ({
    quotes: [...initialQuotes], // Initialize with initial quotes
  }),
  actions: {
    // Action to add a new quote
    addQuote(newQuote: Quote) {
      this.quotes.push(newQuote);
    },
    // Action to remove a quote by its ID
    removeQuote(quoteId: number) {
      this.quotes = this.quotes.filter((quote) => quote.id !== quoteId);
    },
  },
});