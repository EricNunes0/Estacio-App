export const getResourceName = (resource) => {
    let resourceName = "Nome";
    switch(resource) {
        case "tamanho":
            resourceName = "Tamanho";
            break;
        case "calda":
            resourceName = "Calda";
            break;
        case "sabores":
            resourceName = "Sabor";
            break;
        case "condimentos":
            resourceName = "Condimento";
            break;
        case "adicionais":
            resourceName = "Adicional";
            break;
        default:
            break;
    }
    return resourceName;
};