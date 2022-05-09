// enum
enum Role {
    ADMIN = 'Admin',
    NORMAL = 'Normal'
};

type NumOrStr = number | string;

// aliases e union
type Person = {
    id: NumOrStr,
    name: string,
    email: string,
    password: NumOrStr,
    role: Role
};

type AdminAccount = {
    admAccount: boolean,
    admPermission: boolean
};

type NormalAccount = {
    userAccount: boolean,
    userPermission: boolean
};


// intersection
type UserInfo = Person & NormalAccount;
type AdmInfo = Person & AdminAccount;

const thi: UserInfo = {
    id: 2132123,
    name: 'Thiago Porto',
    email: 'thi.teste@test.com',
    password: 21323123321,
    role: Role.NORMAL,
    userAccount: true,
    userPermission: true
};

const fe: AdmInfo = {
    id: 2132123,
    name: 'Fe',
    email: 'fe.teste@test.com',
    password: 21323123321,
    role: Role.NORMAL,
    admAccount: true,
    admPermission: true
};

const robs: UserInfo = {
    id: 2132123,
    name: 'Robs',
    email: 'robs.teste@test.com',
    password: 21323123321,
    role: Role.NORMAL,
    userAccount: true,
    userPermission: true
};

type Users = AdmInfo[] & UserInfo[];

const users: Users = [];

users.push(fe);

users.push(thi);

users.push(robs);

console.log(users);