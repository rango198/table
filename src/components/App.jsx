import { Toaster } from 'react-hot-toast';
import { addItem, getAll } from './Table/khaiAPI/api';
import { Filters } from 'components/Fiters/Filters';
import TableUniver from './Table/TableUniver';
import React, { useEffect, useState } from 'react';
import { delItem } from './Table/khaiAPI/api';
import { Modal } from './Modal/Modal';
import { ModalForm } from './Modal/ModalForm/ModalForm';

export const App = () => {
  const [data, setData] = useState([]);
  const [onModal, setOnModal] = useState(false);

  const showModal = () => {
    setOnModal(true);
  };
  const closeModal = () => {
    setOnModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAll();
      setData(result);
    };

    fetchData();
  }, []);

  const handleAdd = async values => {
    const result = await addItem(values);
    if (result) {
      const updatedData = await getAll();
      setData(updatedData);
    }
  };

  const handleDelete = async id => {
    const result = await delItem(id);
    if (result.data) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    }
  };

  const handleEdit = async id => {
    const dataId = data.find(item => item.id === id);
    console.log(dataId);
    // const result = await editItem(dataId, id);
    // console.log(result);
    return;
  };

  return (
    <div>
      <Filters showModal={showModal} />
      <TableUniver
        itemlist={data}
        deleteItem={handleDelete}
        edit={handleEdit}
      />
      {onModal && (
        <Modal close={closeModal}>
          <ModalForm onSubmit={handleAdd} closeModal={closeModal} />
        </Modal>
      )}
      <Toaster />
    </div>
  );
};
