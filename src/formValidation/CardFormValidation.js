
export const required = (value) => {
    if(value) return undefined;
    return 'Поле обязательно для заполнения'
}

