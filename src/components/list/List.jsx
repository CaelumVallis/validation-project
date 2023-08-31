import { useSelector } from 'react-redux';

const ListItem = ({ data }) => {
  return (
    <div style={{ borderBottom: '1px solid orange' }}>
      {Object.keys(data).map((field, i) => {
        return (
          <p key={`field_${field}_#${i}`}>
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
      {list.map((el, i) => (
        <ListItem data={el} key={`listItem_${el.message}_#${i}`} />
      ))}
    </div>
  );
};
