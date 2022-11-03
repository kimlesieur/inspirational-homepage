interface Todo {
    text: string,
    done: boolean
};

interface TodosState {
    todos: Todo[],
    other: string
};

interface Url {
    id: number, 
    url: string
}

interface BackgroundImagesState {
    urls: Url[],
    isLoadingImages: boolean,
    hasError: boolean
}

interface Urls {
    id: number,
    url: string
}
