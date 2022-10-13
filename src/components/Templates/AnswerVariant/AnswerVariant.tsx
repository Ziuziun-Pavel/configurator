import React, { ChangeEvent, useState } from 'react';
import s from './AnswerVariant.module.scss';
import ClipPath from '../../../assets/clip.svg';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteButton from '../../UI/Buttons/DeleteButton/DeleteButton';
import { AnswerVariantsProps } from '../../../models/Interfaces';

const AnswerVariant: React.FC<AnswerVariantsProps> = ({
                                                        placeholder,
                                                        isSmall,
                                                        questionUploadedFiles,
                                                        setQuestionUploadedFiles,
                                                        index,
                                                        isKey,
                                                        isTask,
                                                        setIsKey,
                                                        uploadFile,
                                                        questionText,
                                                        setQuestionText
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

    if (!isSmall) {
      const uploaded: File[] = [...questionUploadedFiles];
      files.some(file => {
        if (uploaded.findIndex(f => f.name === file.name) === -1) {
          uploaded.push(file);
          uploadFile(answerText as string, uploaded);
        }
      });
      setQuestionUploadedFiles?.(uploaded);
    } else {
      const uploaded: File[] = [...uploadedFiles];
      files.some(file => {
        if (uploaded.findIndex(f => f.name === file.name) === -1) {
          uploaded.push(file);
          uploadFile(answerText as string, uploaded);
        }
      });
      setUploadedFiles(uploaded);
    }

  };

  const handleFileEvent = (e: ChangeEvent<HTMLInputElement>) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const onRemoveAllFiles = () => {
    setUploadedFiles([]);
    if (!isSmall) setQuestionUploadedFiles?.([]);
  };

  const onRemoveFileByFileName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, f: File) => {
    e.preventDefault();
    setUploadedFiles(uploadedFiles.filter(x => x.name !== f.name));
    if (!isSmall) setQuestionUploadedFiles?.(questionUploadedFiles.filter(x => x.name !== f.name));

  };

  return (
    <form
      encType="multipart/form-data"
      className={isSmall ? `${s.testBody__description_small}` : `${s.testBody__description}`}
    >
      <input id={`question${index}`}
             className={s.testBody__inputQuestion}
             placeholder={placeholder}
             value={!isSmall ? questionText : answerText}
             onChange={e => {
               setAnswerText(e.target.value);
               if (!isSmall) setQuestionText?.(e.target.value);
             }}
      />

      <div className={s.testBody__download}>
        <input id={`download_input${index}`}
               type='file'
               value=''
               name={`download_input${index}`}
               onChange={handleFileEvent}
               hidden
               multiple
        />
        <label htmlFor={`download_input${index}`}>Загрузить картинку</label>

        <div className={s.clipWrapper}>
          <img alt='clip' src={ClipPath} />
        </div>

        {
          isTask ? (
            <div className={s.testBody__checkboxContainer}>
              <div className={s.testBody__checkbox}>
                <input id={`checkbox_input${index}`}
                       type='checkbox'
                       checked={isKey}
                       name={`checkbox_input${index}`}
                       onChange={() => setIsKey?.(!isKey)}
                />
              </div>

              <label htmlFor={`checkbox_input${index}`}>Прикрепить ключ (12 знаков, большие и маленькие буквы и
                цифр)</label>
            </div>
          ) : ''
        }


      </div>

      <div className={s.uplodedImgsContainer}>
        {
          (!isSmall ? questionUploadedFiles : uploadedFiles).map((file, index) => (
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

      {!(!isSmall ? questionUploadedFiles : uploadedFiles).length ? '' : <div className={s.testBody__filesNumber}>
        {formatFilesTitle((!isSmall ? questionUploadedFiles : uploadedFiles).length)}

        <span
          className={s.testBody__filesSize}>{formatBytes((!isSmall ? questionUploadedFiles : uploadedFiles).reduce((acc, file) => acc + file.size, 0))}</span>

        <span className={s.delete_btn}><DeleteButton text='Удалить всё'
                                                     right='9.5rem'
                                                     onDelete={onRemoveAllFiles}
        /></span>
      </div>}

    </form>
  );
};

export default AnswerVariant;
