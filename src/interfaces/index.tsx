export interface aluno {
    id: number
    last_login: any
    is_superuser: boolean
    first_name: string
    last_name: string
    is_staff: boolean
    date_joined: string
    username: string
    email: string
    password: string
    is_professor: boolean
    name: string
    parent_name: string
    phone: string
    parent_phone: string
    is_active: boolean
    groups: any[]
    user_permissions: any[]
}

export type alunos = aluno[]


export interface boletim {
    id: number
    portugues: number
    matematica: number
    historia: number
    geografia: number
    ciencias: number
    faltas: number
    aluno: aluno
  }
  