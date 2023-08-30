import { useSelector } from 'react-redux';

const ListItem = ({ data }) => {
  return (
    <div style={{ borderBottom: '1px solid orange' }}>
      {Object.keys(data).map((field) => {
        return (
          <p key={Math.random()}>
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
        <ListItem data={el} key={Math.random()} />
      ))}
    </div>
  );
};
