// utils/storage.ts
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Failed to load state:', err);
      return undefined;
    }
  };
  
  export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cartState', serializedState);
    } catch (err) {
      console.error('Failed to save state:', err);
    }
  };