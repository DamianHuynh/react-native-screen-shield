package com.screenshield

import android.view.WindowManager
import com.facebook.react.bridge.*
import java.lang.Exception


class ScreenShieldModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String {
    return "ScreenShield";
  }

  @ReactMethod
  fun enableSecureFlag(promise: Promise) {
    UiThreadUtil.runOnUiThread(Runnable {
      try {
        currentActivity!!.getWindow()!!
          .setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
        promise.resolve(true)
      } catch (exception: Exception) {
        promise.reject(exception);
      }
    });
  }

  @ReactMethod
  fun disableSecureFlag(promise: Promise) {
    UiThreadUtil.runOnUiThread(Runnable {
      try {
        currentActivity!!.getWindow()!!.clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
        promise.resolve(true);
      } catch (exception: Exception) {
        promise.reject(exception);
      }
    });
  }
}
