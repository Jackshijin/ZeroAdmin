/*
 * @Description:
 * @Author: shrijin
 * @Date: 2023-07-27 11:10:32
 * @LastEditors: shrijin
 * @LastEditTime: 2023-07-27 11:11:38
 */

interface FormItemProps {
  name: string;
  code: string;
  remark: string;
}

interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
