import React, { useState } from 'react';
import ListcollectionItems from './ListcollectionItems';

const Listcollection = ({ todos, onTodoDelete, onTodoComplete }) => {


  todos.sort((m, n) => m.remaining - n.remaining);

  const [filters, setFilters] = useState({
    all: true,
    udemy: false,
    paiza: false,
    study: false,
    qualification: false,
    codetest: false,
    job: false,
    youtube: false,
    dev: false,
    hackathon: false,
    newqrd: false,
    other: false,
  });

  const handleCheckChange = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  const categories = [
    { label: '全てのタスク', id: 'all' },
    { label: 'udemy', id: 'udemy' },
    { label: 'Paiza', id: 'paiza' },
    { label: '参考書', id: 'study' },
    { label: '資格', id: 'qualification' },
    { label: 'コーディングテスト', id: 'codetest' },
    { label: 'アルバイト・インターン', id: 'job' },
    { label: 'Youtube', id: 'youtube' },
    { label: '個人開発', id: 'dev' },
    { label: 'ハッカソン', id: 'hackathon' },
    { label: '就活', id: 'newqrd' },
    { label: 'その他', id: 'other' },
  ];

  const renderTodoList = (category) => {
    const filteredTodos = category === 'all' ? todos : todos.filter(todo => todo.kind === category);
    return (
      <div>
        <h2>{categories.find(cat => cat.id === category).label}</h2>
        <ul>
          {filteredTodos.map((todo, index) => (
            <ListcollectionItems
              key={index}
              todo={todo}
              onDelete={onTodoDelete}
              onComplete={onTodoComplete}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section>
      <div className='checkboxWrapper'>
        {categories.map((category) => (
          <div className='checkboxContainer' key={category.id}>
            <input
              type='checkbox'
              checked={filters[category.id]}
              onChange={() => handleCheckChange(category.id)}
              id={category.id}
              className='checkbox'
            />
            <label htmlFor={category.id} className='label'>{category.label}</label>
          </div>
        ))}
      </div>

      {Object.keys(filters).map(category => filters[category] && renderTodoList(category))}
    </section>
  );
};

export default Listcollection;
