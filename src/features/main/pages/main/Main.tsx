import { useState } from "react";
import { NavBar, PanelFilters } from "../../components";
import { TablePeople } from "../../components/TablePeople";
import { Filters, User } from "../../../../types";

export const Main = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters | null>(null)

  return (
    <>
      <NavBar />
      <div className="container  pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="dt-title">
              <h3>Listado de usuarios</h3>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-3 ">
            <div className="d-flex justify-content-end align-items-center">
              <button
                className="btn btn-sm btn-outline-primary px-4 "
                onClick={() => setShowFilters(!showFilters)}
              >
                <i className="bi bi-sliders"></i> Filtros
              </button>
            </div>
          </div>
          {
            showFilters && <PanelFilters setFilters={setFilters} />
          }
          <TablePeople filters={filters} />
        </div>
      </div>
    </>
  );
};
