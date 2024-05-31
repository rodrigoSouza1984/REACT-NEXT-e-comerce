import { useState } from "react";

export function addDataInLocalStorage<T>(item: string, defaultValue: []) {
    try {
        const storedItem = localStorage.getItem(item);

        if (!storedItem) {
            localStorage.setItem(item, JSON.stringify(defaultValue));
        }

        const [value, setValue] = useState(storedItem ? JSON.parse(storedItem) : defaultValue);

        const updateLocalStorage = (newValue: T) => {
            setValue(newValue);
            localStorage.setItem(item, JSON.stringify(newValue));
        }

        return {
            value,
            updateLocalStorage
        }
    } catch (err) {
        console.log('err in addDataInLocalStorage', err)

        console.log('Error in addDataInLocalStorage:', err);
        // Retorna um objeto padrão caso ocorra um erro
        return {
            value: defaultValue,
            updateLocalStorage: () => {}
        };
    }
}


export function getFromLocalStorage(item: string, defaultValue: []) {
    try {
        const storedItem = localStorage.getItem(item);
        return storedItem ? JSON.parse(storedItem) : defaultValue;
    } catch (err) {
        console.log('err in getFromLocalStorage', err)
    }
}


export function updateItemInLocalStorage<T>(key: string, index: number, newItem: T) {
    try {
        const storedItem = localStorage.getItem(key);

        if (storedItem) {
            const value = JSON.parse(storedItem) as T[];
            const updatedValue = [...value];
            updatedValue[index] = newItem;
            localStorage.setItem(key, JSON.stringify(updatedValue));
        } else {
            console.error('Item not found in localStorage');
        }
    } catch (err) {
        console.log('err in updateItemInLocalStorage', err)
    }
}

export function removeItemFromLocalStorage<T>(key: string, index: number) {
    try {
        const storedItem = localStorage.getItem(key);

        if (storedItem) {
            const value = JSON.parse(storedItem) as T[];
            const updatedValue = value.filter((_, i) => i !== index);
            localStorage.setItem(key, JSON.stringify(updatedValue));
        } else {
            console.error('Item not found in localStorage');
        }

    } catch (err) {
        console.log('err in removeItemFromLocalStorage', err)
    }
}

// Função para remover o item inteiro do localStorage
export function removeStorageItem(key: string) {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log('Error in removeStorageItem:', err);
    }
}