import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Pen, Trash2 } from "lucide-react";
import styles from "./admin.module.css";

export const SortableRow = ({
  data,
  onEdit,
  onDelete,
}: {
  data: any;
  onEdit: (data: any) => void;
  onDelete: (id: string) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: data._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isDragging ? "var(--color-lightPink)" : "transparent",
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, width: "100%" }}
      {...attributes}
      {...listeners}
    >
      <div className={styles.tableContent} style={{ cursor: "grab" }}>
        <div>
          <img
            src={Array.isArray(data.images) ? data.images[0] : data.images}
            alt="Product"
            className={styles.productImage}
          />
        </div>
        <div className={styles.productName}>{data.name}</div>
        <div>
          <div
            className={styles.productType}
            style={{ minWidth: "80px", textAlign: "center" }}
          >
            {data.category}
          </div>
        </div>
        <div className={styles.productPrice}>Rs. {data.price}</div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            className={styles.action}
            onClick={(e) => {
              e.stopPropagation();
              onEdit(data);
            }}
          >
            <Pen size={20} color="var(--color-blue)" />
          </div>
          <div
            className={styles.action}
            style={{ backgroundColor: "#f3bedaff" }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(data._id);
            }}
          >
            <Trash2 size={20} color="red" />
          </div>
        </div>
      </div>
      <div
        className={styles.table}
        style={{
          borderBottom: "1px solid rgba(240, 240, 240, 1)",
          padding: "0 10px",
        }}
      />
    </div>
  );
};
