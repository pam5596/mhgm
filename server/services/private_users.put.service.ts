import type { PrivateUsersPUTRequestDTO } from "../../shared/dtos/private_users.put.req.dto";
import { PrivateUsersPUTResponseDTO } from "../../shared/dtos/private_users.put.res.dto";
import { UserModel } from "../../shared/models/user.model";
import type { UserRepository } from "../repositories/user.repository";
import type { BaseService } from "./_base";

export class PrivateUsersPUTService
	implements BaseService<PrivateUsersPUTRequestDTO, PrivateUsersPUTResponseDTO>
{
	constructor(private userRepository: UserRepository) {}

	async execute(request: PrivateUsersPUTRequestDTO) {
		const body = request.values.body;

		const user = await this.userRepository.upsert(new UserModel(body));

		return new PrivateUsersPUTResponseDTO({ body: { id: user.values.id! } });
	}
}
