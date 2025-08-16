export function formatName(name: string) {
    return name.replaceAll(' ', '-').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
