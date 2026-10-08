package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun SharingScreen(onCreate:()->Unit){Card{Column{Text("Sharing");Text("Domain-specific sharing workflow");Button(onClick=onCreate){Text("Create")}}}}
