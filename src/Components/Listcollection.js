import React, { useState } from 'react';
import ListcollectionItems from './ListcollectionItems';

// import { CheckBox } from '@mui/icons-material';

const Listcollection = ({ todos, onTodoDelete, onTodoComplete }) => {

   console.log(todos.remaining)

    const handleDelete = (todoId) => {
      onTodoDelete(todoId);
    };
  
    const handleComplete = (todoId) => {
      onTodoComplete(todoId);
    };

    //ソートを使って残り日数順に並べる
    todos.sort((m,n) => m.remaining -  n.remaining)
    
    const [showAll,  setShowAll]  =  useState(true)
    const [showUdemy, setShowUdemy] = useState(false);
    const [showPaiza, setShowPaiza] = useState(false);
    const [showStudy, setShowStudy] = useState(false);
    const [showQualification, setShowQualification] = useState(false);
    const [showCodetest, setShowCodetest] = useState(false);
    const [showJob, setShowJob] = useState(false);
    const [showYoutube, setShowYoutube] = useState(false);
    const [showDev, setShowDev] = useState(false);
    const [showHackathon, setShowHackathon] = useState(false);
    const [shownewqrd, setShowNewqrd] = useState(false);
    const [showOther, setShowOther] = useState(false);



    const handleCheckChange = (category) => {
      switch(category){
        case 'all':
        setShowAll(!showAll);
        break;
        case 'udemy':
        setShowUdemy(!showUdemy);
        break;
        case 'paiza':
        setShowPaiza(!showPaiza);
        break;
        case 'study':
        setShowStudy(!showStudy);
        break;
        case 'qualification':
        setShowQualification(!showQualification);
        break;
        case 'codetest':
        setShowCodetest(!showCodetest);
        break;
        case 'job':
        setShowJob(!showJob);
        break;
        case 'youtube':
        setShowYoutube(!showYoutube);
        break;
        case 'dev':
        setShowDev(!showDev);
        break;
        case 'hackathon':
          setShowHackathon(!showHackathon);
        break;
        case 'newqrd':
          setShowNewqrd(!shownewqrd);
          break;
          case 'other':
          setShowOther(!showOther);
          break;
        default:
      };
    };



  
    return (
      <section>
        <div className='checkboxWrapper'>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showAll}  onChange={() => handleCheckChange('all')} id="all" className='checkbox'  />
        <label id="all" className='label labelall'>全てのタスク</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showUdemy}  onChange={() => handleCheckChange('udemy')} id="udemy" className='checkbox'  />
        <label id="udemy" className='label'>udemy</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showPaiza}  onChange={() => handleCheckChange('paiza')} id="paiza" className='checkbox'  />
        <label id="paiza" className='label'>Paiza</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showStudy}  onChange={() => handleCheckChange('study')} id="study" className='checkbox'  />
        <label id="study" className='label'>参考書</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showQualification}  onChange={() => handleCheckChange('qualification')} id="qualification" className='checkbox'  />
        <label id="qualification" className='label'>資格</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showCodetest}  onChange={() => handleCheckChange('codetest')} id="codetest" className='checkbox'  />
        <label id="codetest" className='label'>コーディングテスト</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showYoutube}  onChange={() => handleCheckChange('youtube')} id="youtube" className='checkbox'  />
        <label id="youtube" className='label'>Youtube</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showJob}  onChange={() => handleCheckChange('job')} id="job" className='checkbox'  />
        <label id="job" className='label'>アルバイト・インターン</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showHackathon}  onChange={() => handleCheckChange('hackathon')} id="hackathon" className='checkbox'  />
        <label id="hackathon" className='label'>ハッカソン</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showDev}  onChange={() => handleCheckChange('dev')} id="dev" className='checkbox'   />
        <label id="dev" className='label'>個人開発</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={shownewqrd}  onChange={() => handleCheckChange('newqrd')} id="newqrd" className='checkbox'   />
        <label id="newqrd" className='label'>就活</label>
        </div>
        <div className='checkboxContainer'>
        <input type='checkbox' checked={showOther}  onChange={() => handleCheckChange('other')} id="other"  className='checkbox' />
        <label id="other" className='label'>その他</label>
        </div>
        </div>

        {showAll && (
          <div>
          <h2>全てのタスク</h2>
          <ul>
            {todos.map((todo, index) =>
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
            )}
          </ul>
          </div>
        )}
        {showUdemy && (
          <div>
          <h2>Udemy</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'udemy' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showPaiza && (
          <div>
          <h2>Paiza</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'paiza' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
       {showStudy && (
          <div>
          <h2>参考書</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'study' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showQualification && (
          <div>
          <h2>資格</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'qualification' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
       {showCodetest && (
          <div>
          <h2>コーディングテスト</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'codetest' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showJob && (
          <div>
          <h2>アルバイト・長期インターン </h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'job' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showYoutube && (
          <div>
          <h2>Youtube </h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'youtube' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showDev && (
          <div>
          <h2>個人開発</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'dev' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showHackathon && (
          <div>
          <h2>ハッカソン</h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'hackathon' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
       {shownewqrd && (
          <div>
          <h2>就活 </h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'newqrd' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                  onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
        {showOther && (
          <div>
          <h2>その他 </h2>
          <ul>
            {todos.map((todo, index) =>
              todo.kind === 'other' ? (
                <ListcollectionItems
                  key={index}
                  todo={todo}
                  onDelete={handleDelete}
                onComplete={handleComplete}
                />
              ) : null
            )}
          </ul>
          </div>
        )}
      </section>
    );
  };
  

export default Listcollection;
