import { FC, useState, useMemo } from 'react'

type Props = {
  currentPage: number,
  carsPerPage: number,
  totalCars: number,
  paginate:  (number: number)=> void 
}

const PAGE_NUMBER_LIMIT = 3;

const Pagination: FC<Props> = ({ currentPage, carsPerPage, paginate, totalCars }) => {
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  //const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
  const pagesCount = useMemo(() => Math.ceil(totalCars / carsPerPage), [totalCars, carsPerPage])
    const minPageNumberLimit = useMemo(() => maxPageNumberLimit - PAGE_NUMBER_LIMIT + 1, [maxPageNumberLimit])

  const pageNumbers = useMemo(() => {
    return new Array(pagesCount).fill(null).map((_, i) => i + 1);
  }, [pagesCount]);

  console.log(pagesCount)

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit - 1) {
      return (
        <li key={number} className="flex list-none border-none cursor-pointer outline-none">
          <button
            onClick={() => paginate(number)}
            className={`${currentPage === number ? 'text-blue-600 outline-none' : ''}`}
            id={`${number}`}
          >
            {number}
          </button>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + PAGE_NUMBER_LIMIT);
       // setMinPageNumberLimit(minPageNumberLimit + PAGE_NUMBER_LIMIT);
      }
    }
  };

  const handlePrevtBtn = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);

      if ((currentPage - 1) % PAGE_NUMBER_LIMIT === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - PAGE_NUMBER_LIMIT);
        //setMinPageNumberLimit(minPageNumberLimit - PAGE_NUMBER_LIMIT);
      }
    }
  };

  console.log(currentPage);

  return (
    <nav>
      <ul className="flex flex-row items-center justify-center outline-none">
        <li>
            <button className="border-none bg-cyan-100 hover:bg-cyan-600 font-sans font-semibold text-2xl cursor-pointer focus:outline-none" onClick={handlePrevtBtn}>
              &lt;
            </button>
        </li>
        {renderPageNumbers}
        <li>
            <button className="border-none bg-cyan-100 hover:bg-cyan-600 font-sans font-semibold text-2xl cursor-pointer focus:outline-none" onClick={handleNextBtn}>
              &gt;
            </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination