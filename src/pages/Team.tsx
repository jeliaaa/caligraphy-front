const teamMembers = [
    { name: "თორნიკე ჭაღალიძე", role: "ფინანსური დირექტორი", imgUrl: "https://picsum.photos/100" },
    { name: "დათო ჭაღალიძე", role: "აღმასრულებელი დირექტორი", imgUrl: "https://picsum.photos/100" },
    { name: "მირზა ჭაღალიძე", role: "გაყიდვების და საზოგადოებასთან ურთიერთობის დეპარტამენტის უფროსი", imgUrl: "https://picsum.photos/100" },
    { name: "დათო გოგიაშვილი", role: "ტექნიკური მენეჯერი და დამკვეთთან ურთიერთობის სპეციალისტი", imgUrl: "https://picsum.photos/100" },
    { name: "ნათია თოიძე", role: "გაყიდვების მენეჯერი", imgUrl: "https://picsum.photos/100" },
    { name: "ნათია ჩავლეიშვილი", role: "სოცმედიის მენეჯერი", imgUrl: "https://picsum.photos/100" },
    { name: "სოფიო შილაძე", role: "ბუღალტერი", imgUrl: "https://picsum.photos/100" },
    { name: "რუსლან ჭაღალიძე", role: "შესყიდვების მენეჯერი", imgUrl: "https://picsum.photos/100" },
    { name: "ნინო აროშიძე", role: "ოფის მენეჯერი", imgUrl: "https://picsum.photos/100" },
    { name: "ბესო მახაჭაძე", role: "ხარისხის კონტროლის მენეჯერი", imgUrl: "https://picsum.photos/100" },
];

const TeamPage = () => {
    return (
        <div className="p-12">
            <h2 className="text-center text-4xl font-bold mb-8">გუნდის წევრები</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg flex flex-col justify-between transition-shadow duration-300">
                        <img src={member.imgUrl} alt={member.name} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                        <div className="p-4 flex justify-center bg-main-color">
                            <a href={`mailto:${member.name}@example.com`} className="text-white hover:text-blue-800">კონტაქტი</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
