import { FieldValues, useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { categoriesState, categoryState } from '../atoms';

const CreateCategory = () => {
  const setCategories = useSetRecoilState(categoriesState);
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit } = useForm();

  const handleValid = ({ category }: FieldValues) => {
    setCategories((currentCategories) => {
      const newCategories = [
        { id: category, text: category },
        ...currentCategories,
      ];
      localStorage.setItem('categories', JSON.stringify(newCategories));
      return newCategories;
    });
    setCategory(category);
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('category', {
          required: 'Please write a Category',
        })}
        placeholder='Write a category'
      />
      <button>add category</button>
    </form>
  );
};

export default CreateCategory;
