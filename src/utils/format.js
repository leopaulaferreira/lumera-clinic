export const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

export function getTodayISO() {
    return new Date().toISOString().split("T")[0];
}

export function formatDate(date) {
    return new Date(`${date}T12:00:00`).toLocaleDateString(
        "pt-BR"
    );
}

export function formatSpecialties(specialties) {
    if (Array.isArray(specialties)) {
        return specialties.join(" • ");
    }

    return specialties;
}
