import { useSelector } from 'react-redux';

const ListItem = ({ data }) => {
  return (
    <div style={{ borderBottom: '1px solid orange' }}>
      {Object.keys(data).map((field) => {
        return (
          <p key={`field_${field}_${Math.random()}`}>
            {field}: {data[field]}
          </p>
        );
      })}
    </div>
  );
};

export const List = () => {
  const { list } = useSelector((state) => state.formData);

  return (
    <div>
      {list.map((el) => (
        <ListItem data={el} key={`listItem_${el.message}_${Math.random()}`} />
      ))}
    </div>
  );
};
