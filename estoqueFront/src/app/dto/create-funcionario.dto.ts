import { Role } from "../enums/enums";

export interface CreateFuncionarioDto {
    nome: String;
    cpf: number;
    cep: number;
    telefone: number;
    email: String;
    password: string;
    role: Role;
}