package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DocumentsScreen(onCreate:()->Unit){Card{Column{Text("Documents");Text("Domain-specific documents workflow");Button(onClick=onCreate){Text("Create")}}}}
