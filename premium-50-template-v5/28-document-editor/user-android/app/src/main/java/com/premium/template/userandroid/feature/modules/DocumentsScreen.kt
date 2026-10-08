package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DocumentsScreen(onCreate:()->Unit){Card{Column{Text("Documents");Text("Domain-specific documents workflow");Button(onClick=onCreate){Text("Create")}}}}
