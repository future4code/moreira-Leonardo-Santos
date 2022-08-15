export type User = {
    name: String,
    nickname: String,
    email: String
};
export type UserById = {
    id: number,
    nickname: String,
};

export type Task = {
    taskId: string,
	title: string,
	description: string,
	limitDate: string,
	status: string,
	creatorUserId: string,
	creatorUserNickname: string
};