// 1100 -> 18:20

export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);

  const minutes = minutesAmount % 60;
  // adiciona um 0 na frente do numero de horas caso não tenha 2 caracteres.
  // Adicionando a mesma lógica pra minutes também.
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}