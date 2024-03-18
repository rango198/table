import { BaseTable, THead, Td, Th, Tr } from './Table.styled';

const TableUniver = ({ itemlist, deleteItem, edit }) => {
  return (
    <>
      <BaseTable>
        <THead>
          <Tr>
            <Th>№</Th>
            <Th>Назва Універу</Th>
            <Th>Скорочена назва</Th>
            <Th>Сайт</Th>
            <Th>Перелік програм</Th>
            <Th>Викладач</Th>
            <Th>Редагувати</Th>
          </Tr>
        </THead>
        <tbody>
          {itemlist.map(
            (
              { id, universityName, shortName, sitelink, programsList, garant },
              index
            ) => (
              <Tr key={id}>
                <Td>{index + 1}</Td>
                <Td>{universityName}</Td>
                <Td>{shortName}</Td>
                <Td>{sitelink}</Td>
                <Td>{programsList}</Td>
                <Td>{garant}</Td>
                <Td>
                  <button type="button" onClick={() => edit(id)}>
                    edit
                  </button>
                  <button type="button" onClick={() => deleteItem(id)}>
                    delete
                  </button>
                </Td>
              </Tr>
            )
          )}
        </tbody>
      </BaseTable>
    </>
  );
};

export default TableUniver;
