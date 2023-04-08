type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
  // string타입의 카테고리를 인자로 전달하면 아무것도 반환해주지 않는 함수 카테고리가 클릭되면 현재 선택된 카테고리를 전달해줄 것
};
export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-red-200 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-red-300 ${
              category === selected && "text-red-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
