import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

export default function UserList() {
	const [listOfUser, setListOfUser] = useState(null);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
			if (res) {
				setListOfUser(res.data);
			}
		});
	}, []);

	return (
		<div className="max-w-[1600px] mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center">
				{listOfUser?.map((user) => (
					<User key={user.id} {...user} />
				))}
			</div>
		</div>
	);
}
