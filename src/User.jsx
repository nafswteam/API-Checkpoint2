/* eslint-disable react/prop-types */
export default function User({
	name,
	email,
	address,
	website,
	phone,
	company,
}) {
	const { street, city, suite } = address;
	return (
		<div className="max-w-[400px] h-[330px] bg-gray-100 shadow-2xl rounded-xl overflow-hidden m-5 relative">
			<div className="flex justify-between h-full">
				<div className="w-full flex items-center justify-evenly z-10 gap-10">
					<div className="text-black mr-5 self-start  flex flex-col  items-center justify-center pl-10 md:pl-1 md:pt-10">
						<img
							src="https://img.freepik.com/premium-vector/branding-identity-corporate-s-logo-vector-design_460848-13952.jpg?size=626&ext=jpg&ga=GA1.1.567223693.1687376094&semt=ais"
							alt="Logo"
							className="w-[75px] h-[75px] md:w-[75px] md:h-[75px] rounded-full"
						/>
						<p className="text-center font-mono font-bold text-[15px]">
							{company.name.split("-")[0]}
						</p>

						<p className="text-[13px] text-medium">{website}</p>
					</div>
					<div className="text-white text-center mr-5 pt-14">
						<h1 className="font-extrabold text-[18px]">{name}</h1>
						<br />
						<br />
						<p className="text-gray-400">{phone.split(" ")[0]}</p>
						<p className="text-gray-400">{email}</p>
						<p className="text-gray-400 text-xs">
							{street}, {suite}
						</p>
						<p className="text-gray-400">{city}</p>
					</div>
				</div>
				{/* <div className="w-0 h-full border-l-[50px] border-l-transparent border-t-[30px] border-t-transparent border-r-[300px] border-r-black border-b-[300px] border-b-black absolute top-0 bottom-0 -right-20"></div> */}
				<div className="bg-black h-full border-l-[390px] border-b-[1000px]  rounded-l-[1000px] rounded-e-3xl sm:border-l-[410px] md:border-l-[470px] sm:border-b-[2000px] border-black absolute top-0 bottom-0 -right-20"></div>
			</div>
		</div>
	);
}
// l
