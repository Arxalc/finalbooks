import React, { useState, Fragment } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { BsCart3, BsArrowLeft } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
//import styles from "../styles/AdminManage.module.scss";
//import * as React from "react";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.scss";

type ModalProp = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditOrder = ({ isOpen, setIsOpen }: ModalProp) => {
  // const [cart, setCart] = useState<ShoppingCart[]>();

  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
            onClose={setIsOpen}
          >
            <div className="text-center flex flex-col min-w-full px-10">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>
              <span className="" aria-hidden="true">
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* cart */}
                <div className="container" style={{ maxWidth: "50%" }}>
                  <div className="card">
                    <div className={styles.form_container}>
                      <h1 className={styles.form_title}>Edit</h1>

                      <form>
                        {" "}
                        {/*onSubmit={registerUser}>*/}
                        <div className="row">
                          <div className="col-lg-6">
                            <div className={styles.form_content}>
                              <input
                                type="text"
                                //value={email}
                              />
                              <label>Name</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                //value={email}
                              />
                              <label>Email</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="date"
                                //value={email}
                              />
                              <label>Date</label>
                              <div className={styles.line}></div>
                            </div>

                            <button onClick={() => setIsOpen(false)}>
                              Back
                            </button>
                          </div>
                          <div className="col-lg-6">
                            <div className={styles.form_content}>
                              <input
                                type="text"
                                //value={email}
                              />
                              <label>User ID</label>
                              <div className={styles.line}></div>
                            </div>

                            <div className={styles.form_content}>
                              <input
                                type="text"
                                //value={email}
                              />
                              <label>Total Price</label>
                              <div className={styles.line}></div>
                            </div>

                            <div
                              className={styles.form_content}
                              style={{ visibility: "hidden" }}
                            >
                              <input
                                type="text"
                                //value={email}
                              />
                              <label>Empty</label>
                              <div className={styles.line}></div>
                            </div>
                            <button type="submit">Edit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* end of cart  */}
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
export default EditOrder;
