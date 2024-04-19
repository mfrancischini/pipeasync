export interface Ialumnos {
	codigo: string,
    nombre: string,
    apellido: string,
    fecha_nacimiento: string,
    curso_inscripto: string
}

export interface Inotas {
    codigo_alumno: string,
    aprobado: boolean,
    nota: number
}

export interface Imaestros {
    codigo: string,
    nombre: string,
    apellido: string,
    curso_titular: string
}