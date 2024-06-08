import { useState } from "react";

export function addDataInLocalStorage<T>(item: string, defaultValue: [] | {}) {// para array e obejto
    try {
        const storedItem = localStorage.getItem(item);

        if (!storedItem) {
            localStorage.setItem(item, JSON.stringify(defaultValue));
        }        

        const updateLocalStorage = (newValue: T) => {           
            localStorage.setItem(item, JSON.stringify(newValue));
        }

        return {           
            updateLocalStorage
        }
    } catch (err) {
        console.log('err in addDataInLocalStorage', err)

        console.log('Error in addDataInLocalStorage:', err);        
        return {
            value: defaultValue,
            updateLocalStorage: () => { }
        };
    }
}


export function getFromLocalStorage(item: string, defaultValue?: []) {
    try {
        const storedItem = localStorage.getItem(item);
        return storedItem ? JSON.parse(storedItem) : defaultValue;
    } catch (err) {
        console.log('err in getFromLocalStorage', err)
    }
}


export function updateItemInLocalStorage<T>(key: string, newItem: any | T, index?: number) {// para array e objeto
    try {
        const storedItem = localStorage.getItem(key);

        if (storedItem) {

            if (Array.isArray(storedItem)) {
                const value = JSON.parse(storedItem) as T[];

                const updatedValue = [...value];

                if(index){
                    updatedValue[index] = newItem;
                }
                
                localStorage.setItem(key, JSON.stringify(updatedValue));
            }else{
                const removeKey = removeStorageItem(key)

                if(removeKey){
                    addDataInLocalStorage(key, newItem)
                }
            }


        } else {
            console.error('Item not found in localStorage');
        }
    } catch (err) {
        console.log('err in updateItemInLocalStorage', err)
    }
}

export function removeItemFromLocalStorage<T>(key: string, index: number) {// para array apenas
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

        return true
    } catch (err) {
        console.log('Error in removeStorageItem:', err);
    }
}