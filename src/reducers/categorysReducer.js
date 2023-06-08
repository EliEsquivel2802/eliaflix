export const initialCategorys = [
    {
        lenguaje: 'Back End',
        description: 'Todos los video que estoy usando para estudiar Back End '
    },
    {
        lenguaje: 'Mobile',
        description: 'Contenido que vengo estudiando sobre React Native y Flutter'
    },
    {
        lenguaje: 'Infraestrutura',
        description: 'Todo lo que estoy aprendiendo sobre Docker y mucho mas'
    },
    {
        lenguaje: 'Data Science',
        description: 'Herramientas y técnicas que estudio sobre UX y Design'
    },
    {
        lenguaje: 'Design & UX',
        description: 'Herramientas y técnicas que estudio sobre UX y Design'
    },
    {
        lenguaje: 'Marketing Digital',
        description: 'La forma de vender y monetizar mis ideas'
    },
    {
        lenguaje: 'Inovação & Gestão',
        description: 'Como mantener el equipo felíz y mucho mas'
    }
]

export const categoryTypes = {
    DELETE: 'DELETE',
    EDIT: 'EDIT'
}

export const categorysReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}