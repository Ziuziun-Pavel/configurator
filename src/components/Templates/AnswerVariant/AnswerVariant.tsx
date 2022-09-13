import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './AnswerVariant.module.scss';
import ClipPath from '../../../assets/clip.svg';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';
import { AnswerVariantsProps } from '../../../models/Interfaces';

const AnswerVariant: React.FC<AnswerVariantsProps> = ({
                                                        placeholder,
                                                        small,
                                                        questionUploadedFiles,
                                                        setQuestionUploadedFiles,
                                                        index,
                                                        uploadFile,
                                                        questionText,
                                                        setQuestionText,
                                                        question
                                                      }) => {
  const [answerText, setAnswerText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const formatFilesTitle = (t: number) => {
    if (t === 1) return `${t} файл`;
    if (t > 1 && t < 5) return `${t} файла`;
    if (t >= 5) return `${t} файлов`;
  };

  const formatBytes = (b: number) => {
    const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0;
    let n = b;

    while (n >= 1024) {
      n /= 1024;
      l += 1;
    }

    return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)}${units[l]}`;
  };

  const handleUploadFiles = (files: File[]) => {
    const uploaded: File[] = [...uploadedFiles];
    files.some(file => {
      if (uploaded.findIndex(f => f.name === file.name) === -1) {
        uploaded.push(file);
      }
    });
    setUploadedFiles(uploaded);

    if (!small) {
      const uploaded: File[] = [...questionUploadedFiles];
      files.some(file => {
        if (uploaded.findIndex(f => f.name === file.name) === -1) {
          uploaded.push(file);
        }
      });
      setQuestionUploadedFiles?.(uploaded);
    }

  };

  const handleFileEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
    uploadFile(answerText as string, chosenFiles);
  };

  const onRemoveAllFiles = () => {
    setUploadedFiles([]);
    if (!small) setQuestionUploadedFiles?.([]);
  };

  const onRemoveFileByFileName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, f: File) => {
    e.preventDefault();
    setUploadedFiles(uploadedFiles.filter(x => x.name !== f.name));
    if (!small) setQuestionUploadedFiles?.(questionUploadedFiles.filter(x => x.name !== f.name));

  };

  return (
    <div className={small ? `${s.testBody__description_small}` : `${s.testBody__description}`}>
      <input id={`question${index}`} className={s.testBody__inputQuestion}
             placeholder={placeholder}
             value={!small ? questionText : answerText}
             onChange={e =>  {
               setAnswerText(e.target.value)
               if (!small) setQuestionText?.(e.target.value)
             }}
      />

      <div className={s.testBody__download}>
        <input id={`download_input${index}`}
               type='file'
               name={`download_input${index}`}
               onChange={handleFileEvent}
               hidden />

        <label htmlFor={`download_input${index}`}>Загрузить картинку</label>

        <div className={s.clipWrapper}>
          <img alt='clip' src={ClipPath} />
        </div>

      </div>

      <div className={s.uplodedImgsContainer}>
        {
          (!small ? questionUploadedFiles : uploadedFiles).map((file, index) => (
            <div key={index} className={s.closeImg}>
              <img src={URL.createObjectURL(file)} alt={file.name} />

              <button className={s.close} onClick={(e) => onRemoveFileByFileName(e, file)}>
                <ClearIcon
                  sx={{
                    color: 'red',
                    fontSize: '1.5em'
                  }} />
              </button>

            </div>
          ))
        }
      </div>

      {!(!small ? questionUploadedFiles : uploadedFiles).length ? '' : <div className={s.testBody__filesNumber}>
        {formatFilesTitle((!small ? questionUploadedFiles : uploadedFiles).length)}

        <span
          className={s.testBody__filesSize}>{formatBytes((!small ? questionUploadedFiles : uploadedFiles).reduce((acc, file) => acc + file.size, 0))}</span>

        <span className={s.delete_btn}><DeleteButton text='Удалить всё'
                                                     right='9.5rem'
                                                     onDelete={onRemoveAllFiles}
        /></span>
      </div>}

    </div>
  );
};

export default AnswerVariant;
