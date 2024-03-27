export type PaginatedResponse<T> = {
	data: T[]
	total: number;
	hasMore: boolean;
}