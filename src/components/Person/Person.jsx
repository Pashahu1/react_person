import styles from '../../App.module.scss';

export const Person = ({ person }) => {
  const partnerType = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className={styles.Person}>
      <h2 className={styles.Person__name}>My name is {person.name}</h2>
      {person.age !== null && person.age !== undefined && (
        <p className={styles.Person__age}>I am {person.age} years old</p>
      )}
      {person.isMarried ? (
        <p className={styles.Person__partner}>
          {person.partnerName} is my {partnerType}
        </p>
      ) : (
        <p className={styles.Person__partner}>I am not married</p>
      )}
    </section>
  );
};
