import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, set, ref, onValue, push } from "firebase/database";


const auth = getAuth(app);
const db = getDatabase(app);

let signUpInstitute = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                obj.id = res.user.uid;
                const reference = ref(db, `institutelogin/${obj.id}`);
                set(reference, obj)
                    .then(() => {
                        resolve("Data Send Successfully in Database and User Created");
                    })
                    .catch((err) => {
                        reject(err.message);
                    });
            })
            .catch((err) => {
                reject(err.message);
            });
    });
};

// let signUpUser = (obj) => {
//     return new Promise((resolve, reject) => {
//         createUserWithEmailAndPassword(auth, obj.email, obj.password)
//             .then((res) => {
//                 obj.id = res.user.uid;
//                 const reference = ref(db, `users/${obj.id}`);
//                 set(reference, obj)
//                     .then(() => {
//                         resolve("Data Send Successfully in Database and User Created");
//                     })
//                     .catch((err) => {
//                         reject(err.message);
//                     });
//             })
//             .catch((err) => {
//                 reject(err.message);
//             });
//     });
// };

let signUpStudent = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                obj.id = res.user.uid;
                const reference = ref(db, `studentlogin/${obj.id}`);
                set(reference, obj)
                    .then(() => {
                        resolve("Data Send Successfully in Database and User Created");
                    })
                    .catch((err) => {
                        reject(err.message);
                    });
            })
            .catch((err) => {
                reject(err.message);
            });
    });
};

let loginInstitute = (obj) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const reference = ref(db, `institutelogin/${res.user.uid}`)
                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    }
                    else {
                        reject("Data not found")
                    }
                })
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

let loginUser = (obj) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const reference = ref(db, `users/${res.user.uid}`)
                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    }
                    else {
                        reject("Data not found")
                    }
                })
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

let loginStudent = (obj) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const reference = ref(db, `studentlogin/${res.user.uid}`)
                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    }
                    else {
                        reject("Data not found")
                    }
                })
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

let protectedroute = (user) => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, user)
        .then((res) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                resolve('user is loged in')
              } else {
                // User is signed out
                // ...
                reject('user is not login')
              }
        }).catch((err) => {
            reject(err.message)
        })
    })
}
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

let postFbData = (nodeName, obj) => {
    return new Promise((resolve, reject) => {
        let keyRef = ref(db, `${nodeName}/`);
        obj.id = push(keyRef).key;

        let postRef = ref(db, `${nodeName}/${obj.id}`);
        set(postRef, obj)
            .then((res) => {
                resolve("Data Send Successfully")
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

let fbCustonPost = (nodeName, obj) => {
    return new Promise((resolve, reject) => {
        let reference = ref(db, `${nodeName}/`)
        set(reference, obj).then(() => {
            resolve("Data send")
        }).catch(() => {
            reject("No data send")
        })
    })

}

let getFbData = (nodeName, id) => {
    return new Promise((resolve, reject) => {
        let reference = ref(db, `${nodeName}/`)
        onValue(reference, (dt) => {
            if (dt.exists()) {
                resolve(Object.values(dt.val()));
            }
            else {
                reject("Data Not Found")
            }
        })
    })
}

let getData = (nodeName) => {
    return new Promise((resolve, reject) => {
        let reference = ref(db, `${nodeName}/`)
        onValue(reference, (dt) => {
            if (dt.exists()) {
                resolve(dt.val());
            }
            else {
                reject("Data Not Found")
            }
        })
    })
}

export {
    loginUser,
    //  signUpUser,
    postFbData,
    getFbData,
    fbCustonPost,
    getData,
    signUpInstitute,
    signUpStudent,
    loginInstitute,
    loginStudent
};