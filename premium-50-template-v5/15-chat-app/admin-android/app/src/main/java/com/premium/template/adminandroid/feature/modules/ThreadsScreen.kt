package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ThreadsScreen(onCreate:()->Unit){Card{Column{Text("Threads");Text("Domain-specific threads workflow");Button(onClick=onCreate){Text("Create")}}}}
