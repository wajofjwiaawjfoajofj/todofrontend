import React, { useState } from 'react';
import ListcollectionItems from './ListcollectionItems';

// import { CheckBox } from '@mui/icons-material';

const Listcollection = ({ todos, onTodoDelete, onTodoComplete }) => {
    const handleDelete = (todoId) => {
      onTodoDelete(todoId);
    };
  
    const handleComplete = (todoId) => {
      onTodoComplete(todoId);
    };

    //ソートを使って残り日数順に並べる
    todos.sort((m,n) => m.day -  n.day)
    
    const [showAll,  setShowAll]  =  useState(true)
    const [showUdemy, setShowUdemy] = useState(true);
    const [showPaiza, setShowPaiza] = useState(true);
    const [showStudy, setShowStudy] = useState(true);
    const [showQualification, setShowQualification] = useState(true);
    const [showCodetest, setShowCodetest] = useState(true);
    const [showJob, setShowJob] = useState(true);
    const [showYoutube, setShowYoutube] = useState(true);
    const [showDev, setShowDev] = useState(true);
    const [showHackathon, setShowHackathon] = useState(true);
    const [shownewqrd, setShowNewqrd] = useState(true);
    const [showOther, setShowOther] = useState(true);



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
        <label id="all">全てのタスク:</label>
        <input type='checkbox' checked={showAll}  onChange={() => handleCheckChange('all')} id="all"  />
        </div>
        <div className='checkboxContainer'>
        <label id="udemy">udemy:</label>
        <input type='checkbox' checked={showUdemy}  onChange={() => handleCheckChange('udemy')} id="udemy"  />
        </div>
        <div className='checkboxContainer'>
        <label id="paiza">Paiza:</label>
        <input type='checkbox' checked={showPaiza}  onChange={() => handleCheckChange('paiza')} id="paiza"  />
        </div>
        <div className='checkboxContainer'>
        <label id="study">参考書:</label>
        <input type='checkbox' checked={showStudy}  onChange={() => handleCheckChange('study')} id="study"  />
        </div>
        <div className='checkboxContainer'>
        <label id="qualification">資格:</label>
        <input type='checkbox' checked={showQualification}  onChange={() => handleCheckChange('qualification')} id="qualification"  />
        </div>
        <div className='checkboxContainer'>
        <label id="codetest">コーディングテスト:</label>
        <input type='checkbox' checked={showCodetest}  onChange={() => handleCheckChange('codetest')} id="codetest"  />
        </div>
        <div className='checkboxContainer'>
        <label id="youtube">Youtube:</label>
        <input type='checkbox' checked={showYoutube}  onChange={() => handleCheckChange('youtube')} id="youtube"  />
        </div>
        <div className='checkboxContainer'>
        <label id="job">アルバイト・インターン:</label>
        <input type='checkbox' checked={showJob}  onChange={() => handleCheckChange('job')} id="job"  />
        </div>
        <div className='checkboxContainer'>
        <label id="hackathon">ハッカソン:</label>
        <input type='checkbox' checked={showHackathon}  onChange={() => handleCheckChange('hackathon')} id="hackathon"  />
        </div>
        <div className='checkboxContainer'>
        <label id="dev">個人開発:</label>
        <input type='checkbox' checked={showDev}  onChange={() => handleCheckChange('dev')} id="dev"  />
        </div>
        <div className='checkboxContainer'>
        <label id="newqrd">就活:</label>
        <input type='checkbox' checked={shownewqrd}  onChange={() => handleCheckChange('newqrd')} id="newqrd"  />
        </div>
        <div className='checkboxContainer'>
        <label id="other">その他:</label>
        <input type='checkbox' checked={showOther}  onChange={() => handleCheckChange('other')} id="other"  />
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
